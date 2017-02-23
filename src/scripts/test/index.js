/**
 * Created by wb-llw259548 on 2017/2/23.
 */
import * as d3 from 'd3';

let canvasEle = document.getElementById('canvas'),
    ctx = canvasEle.getContext('2d');

let arc = d3.arc();
arc.context(ctx);
ctx.beginPath();
ctx.translate(0, 110);
ctx.fillStyle = 'red';
arc({
    innerRadius: 0,
    outerRadius: 100,
    startAngle: 0,
    endAngle: Math.PI / 2
});
ctx.fill();
ctx.closePath();

let data = [
    [20, 20],
    [30, 40],
    [40, 50]
];

let line = d3.line()
    .x(function(d) { return d[0] })
    .y(function(d) { return d[1] });

ctx.beginPath();
ctx.translate(111, 111);
line.context(ctx)(data);
ctx.fill();
ctx.closePath();