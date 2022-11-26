//
//  RCTDeviceUniqueID.m
//  AlamiChallenge
//
//  Created by Sutan Gading Fadhillah Nasution on 26/11/22.
//

#import "RCTDeviceUniqueID.h"

@implementation RCTDeviceUniqueID

RCT_EXPORT_MODULE(DeviceUniqueID);

RCT_EXPORT_METHOD(get: (RCTResponseSenderBlock)callback) {
  NSString *deviceUniqueID = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
  callback(@[deviceUniqueID]);
}

@end
