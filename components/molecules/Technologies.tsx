export default function Technologies() {
    const technologies = [
        // NestJS
        'https://static-00.iconduck.com/assets.00/nestjs-icon-256x255-r03j160r.png',
        // JS
        'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
        // TS
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
        // Docker
        'https://www.proficom.de/blog//app/uploads/2018/09/Docker.png',
        // Github Actions
        'https://avatars.githubusercontent.com/u/44036562?s=200&v=4',
        // K8s
        'https://kubernetes.io/images/favicon.png',
        // Python
        'https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png',
        // C#
        'https://www.freeiconspng.com/uploads/c-logo-icon-18.png',
        // C++
        'https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png',
        // React
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        // Tailwind
        'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png',
        // PostgreSQL
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
        // MongoDB
        'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png',
        // GRPC
        'https://grpc.io/img/logos/grpc-icon-color.png',
        // Redis
        'https://cdn.iconscout.com/icon/free/png-256/free-redis-4-1175103.png',
        // RabbitMQ
        'https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg',
        // Nginx
        'https://d4.alternativeto.net/rzVs59edzRVa55KMDeoptD3jkE1Ulv-DycWvE_c4nkw/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy9uZ2lueF8xMDIwMzUucG5n.png',
    ]

    return (
        <ul className="technologies z-[-1] hidden sm:flex">
            {technologies.map((technology, index) => (
                <li key={index} className={`left-${index} duration-[${index * 250}]`}>
                    <img className="object-contain" src={technology}  />
                </li>
            ))}
        </ul>
    )
}
