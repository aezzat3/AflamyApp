#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "AFNetworking/AFHTTPSessionManager.h"

@interface MovieApiModule : NSObject <RCTBridgeModule>
@end

@implementation MovieApiModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(fetchMoviesList:(NSString *)filter page:(NSInteger)page resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *urlString = [NSString stringWithFormat:@"https://api.themoviedb.org/3/movie/%@?api_key=f96ebd89c24a7d02a571f92793888b5a&page=%ld", filter, (long)page];
    
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

RCT_EXPORT_METHOD(fetchGenres:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *urlString = @"https://api.themoviedb.org/3/genre/movie/list?api_key=f96ebd89c24a7d02a571f92793888b5a";
    
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

RCT_EXPORT_METHOD(fetchCredits:(NSInteger)movieId resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *urlString = [NSString stringWithFormat:@"https://api.themoviedb.org/3/movie/%ld/credits?api_key=f96ebd89c24a7d02a571f92793888b5a", (long)movieId];
    
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
