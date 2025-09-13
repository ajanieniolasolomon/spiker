import { Injectable, signal } from '@angular/core';

export interface ZoomConfig {
  step: number;
  min: number;
  max: number;
  initial: number;
}

@Injectable({
  providedIn: 'root',
})
export class ZoomService {
  private readonly _defaultConfig: ZoomConfig = {
    step: 0.1,
    min: 0.5,
    max: 2.0,
    initial: 0.8,
  };

  private readonly _zoomLevel = signal(this._defaultConfig.initial);
  private readonly _config = signal(this._defaultConfig);

  public readonly zoomLevel = this._zoomLevel.asReadonly();
  public readonly config = this._config.asReadonly();

  public zoomIn(): void {
    const currentLevel = this._zoomLevel();
    const newLevel = Math.min(this._config().max, currentLevel + this._config().step);
    this._zoomLevel.set(newLevel);
  }

  public zoomOut(): void {
    const currentLevel = this._zoomLevel();
    const newLevel = Math.max(this._config().min, currentLevel - this._config().step);
    this._zoomLevel.set(newLevel);
  }

  public resetZoom(): void {
    this._zoomLevel.set(this._config().initial);
  }

  public setZoomLevel(level: number): void {
    const clampedLevel = Math.max(this._config().min, Math.min(this._config().max, level));
    this._zoomLevel.set(clampedLevel);
  }

  public updateConfig(newConfig: Partial<ZoomConfig>): void {
    this._config.update(current => ({
      ...current,
      ...newConfig,
    }));
  }
}
