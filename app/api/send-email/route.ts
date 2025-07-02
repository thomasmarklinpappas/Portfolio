
import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/actions';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message, currentEmail } = body;

        // Validate required fields
        if (!name || !email || !subject || !message || !currentEmail) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        const result = await sendMail({
            name,
            email,
            subject,
            message,
            currentEmail,
        });

        if (result.success) {
            return NextResponse.json(
                { message: 'Email sent successfully' },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: result.message || 'Failed to send email' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('API route error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 