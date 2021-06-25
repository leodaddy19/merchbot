import { Injectable } from "@nestjs/common";
import { use } from 'passport';
import FacebookTokenStrategy from 'passport-facebook-token';

import { UserService } from "modules/user/user.service";

@Injectable()
export class FacebookStrategy {
  constructor(
    private readonly userService: UserService,
  ) {
    this.init();
  }
  init() {
    use(
      new FacebookTokenStrategy(
        {
          clientID: process.env.MESSENGER_APP_ID || "498551788036211",
          clientSecret: process.env.MESSENGER_APP_SECRET || "2cb76c415f0ee11c28aaf7acb2cbb1a4",
          fbGraphVersion: 'v11.0',
        },
        async (
          accessToken: string,
          refreshToken: string,
          profile: any,
          done: any,
        ) => {
          console.log("========> Token:", accessToken, refreshToken);
          const user = await this.userService.findOrCreate(
            profile,
          );
          return done(null, user);
        },
      ),
    );
  }
}