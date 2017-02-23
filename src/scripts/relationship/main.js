/**
 * Created by wb-llw259548 on 2017/2/17.
 */
import * as d3 from 'd3';

const caches = {
    canvas: {
        canvasEleD3: null,
        canvasEle: null,
        ctx: null
    }

};

const relationshipMain = {
    init() {
        this.initData();
    },
    initData() {
        caches.canvas.canvasEleD3 = d3.select('#canvas');
        caches.canvas.canvasEle = document.getElementById('canvas');
        caches.canvas.ctx = caches.canvas.canvasEle.getContext('2d');

        let ctx = caches.canvas.ctx;

    }
};

export default relationshipMain;