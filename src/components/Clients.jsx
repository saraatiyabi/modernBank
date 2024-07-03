import React from 'react'
import { clients } from '../constants';

const Clients = () => (
  <section className="flex justify-center items-center my-3">
    <div className="w-full flex-1 flex justify-around items-center flex-wrap">
      {
        clients.map(client => (
          <div key={client.id} className="flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-8">
            <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain hover:animate-pulse" />
          </div>
        ))
      }
    </div>
  </section>
)

export default Clients