import { useState, useMemo } from 'react';

interface SearchableItem {
  id: string;
  title: string;
  description: string;
  content?: string;
  tags: string[];
}

export const useSearch = <T extends SearchableItem>(items: T[], searchTerm: string) => {
  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) {
      return items;
    }

    const lowercaseSearch = searchTerm.toLowerCase();
    
    return items.filter(item => {
      return (
        item.title.toLowerCase().includes(lowercaseSearch) ||
        item.description.toLowerCase().includes(lowercaseSearch) ||
        (item.content && item.content.toLowerCase().includes(lowercaseSearch)) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowercaseSearch))
      );
    });
  }, [items, searchTerm]);

  return {
    filteredItems,
    hasResults: filteredItems.length > 0,
    totalResults: filteredItems.length
  };
};

export const useSearchState = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setIsSearching(term.length > 0);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsSearching(false);
  };

  return {
    searchTerm,
    isSearching,
    handleSearch,
    clearSearch
  };
};
