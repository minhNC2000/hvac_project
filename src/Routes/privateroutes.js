import React from 'react'
import { AuthMiddleware } from '../Middlewares/AuthMiddleware'
import { Orders } from '../Pages/Orders/Orders'

export const privateroutes = (
<Route path="don-hang" element = {AuthMiddleware}>
  <Route path="" element={<Orders />}
</Route>
) 