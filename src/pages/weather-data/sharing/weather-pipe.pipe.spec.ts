import { WeatherPipePipe } from './weather-pipe.pipe';

describe('WeatherPipePipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherPipePipe();
    expect(pipe).toBeTruthy();
  });
});
