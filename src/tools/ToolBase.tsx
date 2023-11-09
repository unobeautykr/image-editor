import { fabric } from "fabric";
import { EditorCore } from "../EditorCore";

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
    this.name = "unknown";
  }
}
