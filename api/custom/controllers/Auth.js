module.exports = {
  async logout(ctx) {
    ctx.cookies.set("token", null);
    ctx.send({
      message: "Successfully destroyed session",
    });
  },
};
