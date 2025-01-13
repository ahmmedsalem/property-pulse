'use client';
import { ClipLoader } from 'react-spinners'

type Props = {}

const override = {
    display: 'block',
    margin: '100px auto'
}

const LoadingPage = (props: Props) => {
  return (
    <ClipLoader color='#3b82f6' cssOverride={override} size={150} aria-label='loading spinner'/>
  )
}

export default LoadingPage;