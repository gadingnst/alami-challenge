//
//  RCTDeviceUniqueID.m
//  AlamiChallenge
//
//  Created by Sutan Gading Fadhillah Nasution on 26/11/22.
//

#import "RCTDeviceUniqueID.h"

@implementation RCTDeviceUniqueID

RCT_EXPORT_MODULE(DeviceUniqueID);

/** @see https://stackoverflow.com/a/5468681/8112320  */
RCT_EXPORT_METHOD(get: (RCTResponseSenderBlock)callback) {
  NSString *deviceUniqueID = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
  callback(@[deviceUniqueID]);
}

@end
