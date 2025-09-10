
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const photos = formData.getAll('photos');

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Name, email, and message are required.' }, { status: 400 });
    }

    // TODO: Implement reCAPTCHA verification

    // TODO: Save submission to database (Postgres/Supabase or Firebase)

    // TODO: Upload photos to cloud storage

    // TODO: Send transaction emails (owner notification + optional customer confirmation) via SendGrid or SMTP

    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}