import React from 'react'
import Back from '../components/Back'
import { Banner } from '../components/Banner'
import { Link } from 'react-router-dom'

export const Errorpage = () => {
    return <Back>
        <Banner title="404" subtitle="page not found">
            <Link to="/" className="btn-primary">
                return home
            </Link>

        </Banner>
    </Back>
}
