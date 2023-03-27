// eslint-disable-next-line no-unused-vars
import { fabric } from "fabric";
// eslint-disable-next-line no-unused-vars
import { EditorCore } from "../EditorCore";

export class ToolBase {
  /**
   *
   * @param {EditorCore} core
   */
  constructor(core, config) {
    this.core = core;
    this.config = config;
    /**
     * @type {fabric.Canvas}
     */
    this.c = core.c;
    this.name = "unknown";
  }
}
