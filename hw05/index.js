
var databystate = data["Delegates By State"];
var scalar = d3.scale.linear()
.domain([0, 120])
.range([0,900]);

d3.select('.chart')
  .selectAll('div')
  .data(Object.keys(databystate))
  .enter().append(function(d){
    var statediv = document.createElement('div');
    d3.select(statediv)
      .append('div')
      .transition()
      .style('width', scalar(databystate[d]["Total"]) + "px")
      .attr('class', 'label total')
      .text(d  + " Total: " + databystate[d]["Total"] );
    d3.select(statediv)
      .append('div')
      .transition()
      .style('width', scalar(databystate[d]["Allocated"]) + "px")
      .attr('class', 'label allocated')
      .text(databystate[d]["Allocated"] );
    d3.select(statediv)
      .append('div')
      .transition()
      .style('width', scalar(databystate[d]["Unallocated"]) + "px")
      .attr('class', 'label unallocated')
      .text( databystate[d]["Unallocated"] );

    return statediv;
  });
  // .style('width', function(d){
  //   return scalar(databystate[d]["Total"]) + "px";
  // })
  // .append('div')
  // .attr('class', 'label')
  // .text( function(d){ return d  + " Total: " + databystate[d]["Total"] })
  // .append('div')
  // .style('width')
  // .text( function(d){ return d });
//
// d3.select('.chart')
//   .selectAll('div')
//   .data(delegatedata)
//   .enter().append('div')
//   .style('width', function)
