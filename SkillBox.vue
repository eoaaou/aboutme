<template>
  <meta charset="utf-8">	
  <div id="body">
  </div>
  <div id="text">
  
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: 'SkillBox',
  mounted: function() {

    var width = window.innerWidth
    var height = window.innerHeight

    var nodes = [
{
"x_axis": 30,
"y_axis": 30,
"radius": 50,
"id": "pointer",
"image": "#FFF"
},  {
"x_axis": 0,
"y_axis": 0,
"radius": 50,
"id": "SVG",
"image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pY1IaNxquFTjtCw1I1iuMAHaHF%26pid%3DApi&f=1"
},  {
"x_axis": 0,
"y_axis": 0,
"radius": 10,
"id": "Raspberri",
"image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.rPLFK4vv67mlFisWznyVpQHaHa%26pid%3DApi&f=1"
},  {
"x_axis": 0,
"y_axis": 0,
"radius": 50,
"id": "GIMP",
"image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Vwh7VjW3-KgaLdSewDRfOgHaHa%26pid%3DApi&f=1"
},  {
"x_axis": 0,
"y_axis": 0,
"radius": 50,
"id": "Python",
"image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lMY7IsCj1fDjEWWnNB26FwAAAA%26pid%3DApi&f=1"
},  {
"x_axis": 0,
"y_axis": 0,
"radius": 52,
"id": "js",
"image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hUWKZxe-0H19tRRpKNPN0AAAAA%26pid%3DApi&f=1"
},  {
"x_axis": 100,
"y_axis": 0,
"radius": 50,
"id": "bash",
"image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F20%2FBash_Logo_black_and_white_icon_only.svg%2F896px-Bash_Logo_black_and_white_icon_only.svg.png&f=1&nofb=1"
}];

    var root = nodes[0];
    root.radius = 50;
    root.fixed = true;

    const forceX = d3.forceX().strength(0.01)
    const forceY = d3.forceY().strength(0.01)

    var svg = d3.select("#body").append("svg:svg")
    .attr("width", width)
    .attr("height", height);

	var defs = svg.append("defs")

	defs.selectAll('.nodes-pics')
    .data(nodes)
  .enter().append("pattern")
    .attr("id", function(d) { return d.id; })
    .attr("width", "100%")
    .attr("height", "100%")
    .append("image")
    .attr("href", function(d) {
    const imagePath = d.image;
    return imagePath;
  })
    .attr("width", 100)
    .attr("height", 100);

    svg.selectAll("circle")
        .data(nodes)
      .enter().append("circle")
        .attr("r", function(d) { return d.radius; })        
        .attr("fill", function(d) { return "url(#" + d.id + ")" })
        .attr("transform", "translate(" + 2* width / 3 + ", " + height / 2 +")");
    
    var force = d3.forceSimulation()
    .velocityDecay(0.2)
    .force("x", forceX)
    .force("y", forceY)
    .force("collide", d3.forceCollide().radius(function(d){
      if(d === root){
        return Math.random() * 50 + 50;
      }
      return d.radius + 0.5;
    }).iterations(5))

    .nodes(nodes).on("tick", ticked);

    

    function ticked() {
        svg.selectAll("circle")
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    }

    svg.on("mousemove", function() {
        var p1 = d3.pointer(event);
        root.fx = p1[0] - width;
        root.fy = p1[1] - height / 2;
        force.alphaTarget(0.2).restart();//reheat the simulation
    });

  }
}  
</script>

<style type="text/css">

</style>

