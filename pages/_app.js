import {useEffect} from 'react'

const MyApp = ({Component, pageProps}) => {
	useEffect(()=> {
		const jssStyles = document.querySelector('#jss-server-side')
		if(jssStyles){
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])
	return <Component {...pageProps} />
}

export default MyApp

