<template>
  <meta charset="utf-8">	
  <div id="info">
    <p>
      
    </p>
    <aside id="body">
      
    </aside>
  </div>
</template>

<script>
import * as d3 from "d3";
import * as json from "../assets/data.json";

export default {
  name: 'SkillBox',
  mounted: function() {
    
    var width = window.innerWidth
    var height = window.innerHeight / 2
      
    var nodes = json;
    
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
          .attr("transform", "translate(" + width / 2 + ", " + height / 2 +")");
      
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
          root.fx = p1[0] - width / 2;
          root.fy = p1[1] - height / 2;
          force.alphaTarget(0.2).restart(); //reheat the simulation
      });
  }
}  
</script>
