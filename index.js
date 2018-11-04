
exports.handler = async (_a, _b, callback) => {
  callback(null, {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' }
  })
}
