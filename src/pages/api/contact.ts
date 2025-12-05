async function handleSubmit(e) {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);
  setIsSuccess(false);

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const res = await fetch("https://formspree.io/f/xjknoaap", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    });

    if (res.ok) {
      setIsSuccess(true);
      form.reset();
    } else {
      setError("Failed to send message. Try again.");
    }
  } catch {
    setError("Network error.");
  }

  setIsSubmitting(false);
}
