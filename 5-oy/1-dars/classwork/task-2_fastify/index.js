import fastify from 'fastify'

const app = fastify({
    logger: {
        // level - Qaysi leveldan boshlab log chiqarish(debug,info,error,warn...)
        transport: { //Logni qanday formatda chiqarish
            target: 'pino-pretty',
            options: {
                translateTime: "HH:MM:ss",
                ignore: "pid,hostname"
            }
        },
        // serializers: Katta objectlarni qisqartirib log qilish keraklilarni chiqarish
        //redact: Sensitive ma’lumotlarni yashirish
    }
})


app.get('/', async () => {

    return { message: "OK" }
})

await app.listen({ port: 3000 }, () => console.log('Connected', 3000))