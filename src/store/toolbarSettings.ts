import { makeAutoObservable } from 'mobx';

class ToolbarSettings {
  public toolbarVerticalPosition: 'bottom' | 'top' | undefined;
  constructor() {
    makeAutoObservable(this);
    const savedToolbarVerticalPostion =
      localStorage.getItem('verticalPosition') ?? 'bottom';
    this.toolbarVerticalPosition = savedToolbarVerticalPostion as
      | 'top'
      | 'bottom';
  }

  saveToolbarVerticalPosition = (position: 'top' | 'bottom') => {
    this.toolbarVerticalPosition = position;
    localStorage.setItem('verticalPosition', position);
  };

  changeToolbarVerticalPosition = (position: 'top' | 'bottom') => {
    this.saveToolbarVerticalPosition(position);
  };
}

export default new ToolbarSettings();
