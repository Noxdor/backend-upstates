export default defineEventHandler(async () => {
  const { status: statusCode } = await fetch(
    "https://api.proptechtest.de/api/v1",
  )

  const status = statusCode < 300

  return { status, statusCode }
})
