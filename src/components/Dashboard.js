import React from 'react';

import Drawer from './Drawer';

export default class Dashboard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cpu: {
                x: [],
                y: []
            },
            memory: {
                x: [],
                y: []
            }
        }
    }
    updateData(){
        const cpu = this.state.cpu;
    
        const cpuDate = new Date();
        const cpuTime = `${cpuDate.getHours()}:${cpuDate.getMinutes()}:${cpuDate.getSeconds()}`;
    
        const cpuNewX = cpu.x.concat(cpuTime);
        const cpuNewXUpdated = cpuNewX.length>=5?cpuNewX.slice(1, cpuNewX.length):cpuNewX;
       const cpuNewY = cpu.y.concat(Math.floor((Math.random() * 100) + 1));
        const cpuNewYUpdated = cpuNewY.length>=5?cpuNewY.slice(1, cpuNewY.length):cpuNewY;
        
        const cpuData = 
          {
            x: cpuNewXUpdated,
            y: cpuNewYUpdated,
          }
        ;

        const memory = this.state.memory;
    
        const memDate = new Date();
        const memTime = `${memDate.getHours()}:${memDate.getMinutes()}:${memDate.getSeconds()}`
        const memNewX = memory.x.concat(memTime);
        const memNewXUpdated = memNewX.length>=5?memNewX.slice(1, memNewX.length):memNewX;
       const memNewY = memory.y.concat(Math.floor((Math.random() * 100) + 1));
        const memNewYUpdated = memNewY.length>=5?memNewY.slice(1, memNewY.length):memNewY;

        const memoryData = 
            {
              x: memNewXUpdated,
              y: memNewYUpdated,
            }
          ;

        this.setState({cpu: cpuData, memory: memoryData})
      }
      componentDidMount(){
        this.updateID = setInterval(()=> this.updateData(), 3000);
      }
      componentWillUnmount(){
        clearInterval(this.updateID);
      }
    render(){
        return (
            <Drawer cpu={this.state.cpu} memory={this.state.memory} />
        );
    }
}