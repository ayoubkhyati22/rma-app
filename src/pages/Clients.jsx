import React from 'react'
import FormClient from '../components/card/FormClient'
import ClientsList from '../components/clients-list/ClientsList'
import ClientsWrapper, { ClientsWrapperMain, ClientsWrapperRight } from '../components/clients-wrapper/ClientsWrapper'

const Clients = () => {
  return (
    <ClientsWrapper>
        <ClientsWrapperMain>
            <FormClient />
        </ClientsWrapperMain>

        <ClientsWrapperRight>
            <ClientsList />
        </ClientsWrapperRight>

    </ClientsWrapper>

   
  )
}

export default Clients