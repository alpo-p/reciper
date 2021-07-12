/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Constants from 'expo-constants';
import { RNS3 } from 'react-native-upload-aws-s3';

export const uploadPictureToS3 = async (uri: string): Promise<void> => {
  const name = uri.substr(uri.lastIndexOf('/'));

  const file = {
    uri,
    name,
    type: 'image/jpg'
  };

  const options = {
    bucket: 'reciper-pictures',
    region: 'eu-north-1',
    accessKey: Constants.manifest.extra.AWSAccessKeyId as string,
    secretKey: Constants.manifest.extra.AWSSecretKey as string,
  };

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const response = await RNS3.put(file, options);
    if (response.status === 201) {
      console.log('Success: ', response.body);
    } else {
      console.log("Failure: ", response.body);
    }
  } catch(error) {
    console.log(error);
  }
};

export const BOTTOM_MARGIN_GLITCH_FIX_VALUE = 50;