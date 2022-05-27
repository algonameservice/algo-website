export function DomainLink(domain) {
    domain = domain.split('.algo')[0];
    return `https://${domain}.algo.website`;
}