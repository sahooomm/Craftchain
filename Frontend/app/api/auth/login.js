import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/user';

export async function POST(request) {
  try {
    const { walletAddress } = await request.json();

    if (!walletAddress) {
      return NextResponse.json(
        { error: 'Wallet address is required' },
        { status: 400 }
      );
    }
    console.log(walletAddress);

    await connectDB();

    // Find user and update last login
    const user = await User.findOneAndUpdate(
      { walletAddress: walletAddress.toLowerCase() },
      { lastLogin: new Date() },
      { new: true }
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found. Please register first.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user: {
        walletAddress: user.walletAddress,
        name: user.name,
        email: user.email,
        lastLogin: user.lastLogin,
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed. Please try again.' },
      { status: 500 }
    );
  }
}