/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Constants from 'expo-constants';
import { RNS3 } from 'react-native-upload-aws-s3';
import { IS3response } from '../types';

export const uploadPictureToS3 = async (uri: string): Promise<IS3response | undefined> => {
  let name: string;
  try {
    name = uri.substr(uri.lastIndexOf('/'));
  } catch {
    return undefined;
  }

  const file = {
    uri,
    name,
    type: 'image/jpg'
  };

  let accessKey: string;
  let secretKey: string;

  try {
    accessKey = Constants.manifest.extra.AWSAccessKeyId as string;
    secretKey = Constants.manifest.extra.AWSSecretKey as string;
  } catch(e) {
    console.log("Caught error in uploading pic to s3:", e);
    // Can't access env variables in production build so this is a bad workaround for that
    accessKey = "AKIAJJUYCSQSYBOWJHNA"; // THIS IS NOT A GOOD WAY TO GO IN THE FUTURE
    secretKey = "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"; // NEITHER IS THIS
  }
  const options = {
    bucket: 'reciper-pictures',
    region: 'eu-north-1',
    accessKey,
    secretKey 
  };

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const response = await RNS3.put(file, options);
    return response.body as IS3response;
  } catch(error) {
    console.log(error);
    return undefined;
  }
};

export const BOTTOM_MARGIN_GLITCH_FIX_VALUE = 50;