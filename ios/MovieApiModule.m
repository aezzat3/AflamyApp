#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "AFNetworking/AFHTTPSessionManager.h"

static NSString *globalBaseUrl = @"";
static NSString *globalApiKey = @"";

@interface MovieApiModule : NSObject <RCTBridgeModule>
@end

@implementation MovieApiModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(setBaseUrl:(NSString *)baseUrl)
{
    globalBaseUrl = baseUrl;
}

RCT_EXPORT_METHOD(setApiKey:(NSString *)apiKey)
{
    globalApiKey = apiKey;
}

RCT_EXPORT_METHOD(fetchMoviesList:(NSString *)filter
                  page:(NSInteger)page
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *urlString = [NSString stringWithFormat:@"%@/movie/%@?api_key=%@&page=%ld",
                           globalBaseUrl, filter, globalApiKey, (long)page];
    
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    [manager GET:urlString
      parameters:nil
         headers:nil
        progress:nil
         success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
             resolve(responseObject);
         } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
             reject(@"FETCH_ERROR", error.localizedDescription, nil);
         }];
}

RCT_EXPORT_METHOD(fetchGenres:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *urlString = [NSString stringWithFormat:@"%@/genre/movie/list?api_key=%@",
                           globalBaseUrl, globalApiKey];
    
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    [manager GET:urlString
      parameters:nil
         headers:nil
        progress:nil
         success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
             resolve(responseObject);
         } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
             reject(@"FETCH_ERROR", error.localizedDescription, nil);
         }];
}

RCT_EXPORT_METHOD(fetchCredits:(NSInteger)movieId
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *urlString = [NSString stringWithFormat:@"%@/movie/%ld/credits?api_key=%@",
                           globalBaseUrl, (long)movieId, globalApiKey];
    
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    [manager GET:urlString
      parameters:nil
         headers:nil
        progress:nil
         success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
             resolve(responseObject);
         } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
             reject(@"FETCH_ERROR", error.localizedDescription, nil);
         }];
}

@end
