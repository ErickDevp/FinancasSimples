export default function ContainerLandingPage({children, background = '#008F5A'}) {
    return(
        <div style={{background:background, padding: '0 10px'}}>
            {children}
        </div>
    )
}