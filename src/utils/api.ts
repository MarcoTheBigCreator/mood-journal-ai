const createUrl = (path: string) => {
  return window.location.origin + path;
};

export const updateEntry = async (id: string, content: string) => {
  try {
    const res = await fetch(
      new Request(createUrl(`/api/journal/${id}`), {
        method: 'PATCH',
        body: JSON.stringify({ content }),
      })
    );

    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (error) {
    throw new Error('Unable to update entry' + error);
  }
};

export const createNewEntry = async () => {
  try {
    const res = await fetch(
      new Request(createUrl('/api/journal'), {
        method: 'POST',
      })
    );

    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (error) {
    throw new Error('Unable to create new entry' + error);
  }
};
