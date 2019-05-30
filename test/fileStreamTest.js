exports.addUser = async (ctx) => {
    const users = [];
    const user = ctx.request.body;
    console.log(ctx.request);
    users.push(user);
    ctx.body = {success: true, data: users}
}