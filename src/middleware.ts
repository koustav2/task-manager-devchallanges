import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  console.log('middleware')
  // return NextResponse.redirect(new URL('/', request.url))
}
 


// export function middleware(req: NextRequest) {
//   const path = req.nextUrl.pathname

//   const isPublicPath = path === '/login' || path === '/register' || path === '/verifyemail'

//   const token = req.cookies.get('token')?.value || ''

//   if(isPublicPath && token) {
//     return NextResponse.redirect(new URL('/profile', req.nextUrl))
//   }

//   if (!isPublicPath && !token) {
//     return NextResponse.redirect(new URL('/login', req.nextUrl))
//   }

// }


// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: [
//       '/',
//       '/profile',
//       '/login',
//       '/register',
//       '/verifyemail'
//   ]
// }