type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
function validateEmail(email: string): boolean { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
for (let attempt: number = 0; attempt < MAX_RETRY_ATTEMPTS; attempt++) { retryOperation(); }
if (hasPermission(user, 'admin')) { grantAccess(); }
class ApiClient { private baseUrl: string; constructor(url: string) { this.baseUrl = url; } }
