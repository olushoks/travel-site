exports.handler = function(event, context, callback) {
    const secretContent = `
    <h3>Welcome to the secret area</h3>
    <p>Here we can tell you that sky is not always <strong>blue</strong>, and the sky is not always the limit</p>
    `
    let body

    if (event.body) {
        body = JSON.parse(event.body)
    } else {
        body = {}
    }

    if (body.pasword == "javascript") {
        callback(null, {
            statusCode: 200,
            body: secretContent
        })
    } else {
        callback(null, {
            statusCode: 401,
        })
    }

    
}