import { forwardRef, Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { FavoriteModule } from '../favorite/favorite.module';

@Module({
  imports: [forwardRef(() => FavoriteModule)],
  providers: [TrackService],
  controllers: [TrackController],
  exports: [TrackService],
})
export class TrackModule {
}
