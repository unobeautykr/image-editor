// eslint-disable-next-line no-unused-vars
import { fabric } from 'fabric';
// eslint-disable-next-line no-unused-vars
import { EditorCore } from '../EditorCore';

export class ToolBase {
  /**
   *
   * @param {EditorCore} core
   */
  core: any;
  config: any;
  c: any;
  name: any;

  constructor(core: any, config: any) {
    this.core = core;
    this.config = config;
    /**
     * @type {fabric.Canvas}
     */
    this.c = core.c;
    this.name = 'unknown';
  }
}
