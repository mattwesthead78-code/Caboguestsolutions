-- Shared founder pinboard. Any signed-in founder can read all rows;
-- writes always stamp the verified session user_id.
create table if not exists studio_notes (
  id         serial primary key,
  user_id    text not null,
  author     text not null,
  title      text not null,
  body       text not null default '',
  url        text,
  created_at timestamptz not null default now()
);
create index if not exists studio_notes_created_at_idx on studio_notes (created_at desc);
