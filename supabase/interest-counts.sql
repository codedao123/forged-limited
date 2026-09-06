create table if not exists public.interest_counts (
  counter_key text primary key,
  count integer not null default 0
);

alter table public.interest_counts enable row level security;

create or replace function public.increment_interest_count(counter_key text)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  next_count integer;
begin
  insert into public.interest_counts (counter_key, count)
  values (counter_key, 1)
  on conflict (counter_key)
  do update set count = interest_counts.count + 1
  returning count into next_count;

  return next_count;
end;
$$;

revoke all on function public.increment_interest_count(text) from public;
grant execute on function public.increment_interest_count(text) to service_role;
