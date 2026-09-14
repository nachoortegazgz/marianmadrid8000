/**
 * UTILIDADES PÚBLICAS - SSOT v5002.6
 * Funciones utilitarias accesibles desde frontend y backend.
 */

export function makeTraceId(prefix = 'TRACE') {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `${prefix}_${timestamp}_${random}`.toUpperCase();
}

export function _maskEmail(email) {
  if (!email || typeof email !== 'string' || !email.includes('@')) return '[INVALID_EMAIL]';
  const [user, domain] = email.split('@');
  if (user.length <= 2) return `**@${domain}`;
  return `${user.charAt(0)}**${user.charAt(user.length - 1)}@${domain}`;
}

export function _maskPhone(phone) {
  if (!phone) return '[INVALID_PHONE]';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length < 4) return '****';
  return `***${cleaned.slice(-3)}`;
}

export function _maskName(name) {
  if (!name || typeof name !== 'string') return '[INVALID_NAME]';
  if (name.length <= 2) return '**';
  return `${name.charAt(0)}${'*'.repeat(name.length - 2)}${name.charAt(name.length - 1)}`;
}

export function _safeTrim(value) {
  if (typeof value === 'string') return value.trim();
  if (value === null || value === undefined) return '';
  return String(value);
}

export default { makeTraceId, _maskEmail, _maskPhone, _maskName, _safeTrim };
