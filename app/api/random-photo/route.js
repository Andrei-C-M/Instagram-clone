export async function GET() {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    return Response.json(
      { error: "Unsplash access key is not configured" },
      { status: 500 }
    );
  }

  const response = await fetch(
    "https://api.unsplash.com/photos/random?query=nature",
    {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
        "Accept-Version": "v1",
      },
    }
  );

  if (!response.ok) {
    return Response.json(
      { error: "Unsplash request failed" },
      { status: response.status }
    );
  }

  const photo = await response.json();
  return Response.json(photo);
}