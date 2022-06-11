import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('bhuiyan.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ml-5">
            
            {
                tools.map(tool => <Tool
                    key={tool.id}
                    tool={tool}
                ></Tool>)
            }
            <div class="card-actions justify-center mt-10 mb-10">
            <a href="https://github.com/hasansharif819/bhuiyan_tools_clients" target="_blank" className="btn btn-primary">Client</a>
            </div>
            <div class="card-actions justify-center mt-10 mb-10">
            <a href="https://bhuiyan-tools.web.app/" target="_blank" className="btn btn-primary">Live Site</a>
            </div>
            <div class="card-actions justify-center mt-10 mb-10">
            <a href="https://github.com/hasansharif819/bhuiyan_tools_server" target="_blank" className="btn btn-primary">Server</a>
            </div>
        </div>
    );
};

export default Tools;