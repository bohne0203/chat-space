# DB設計

## users table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,index: true|
|email|text|null: false, unique: true|

### Assosiation
- has_many :groups, through: members
- has_many :messages
- has_many :members

## groups table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|

### Assosiation

- has_many :users, through: members
- has_many :messages
- has_many :members

## messages table

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|------|
|user_id|integer|null: false,foreign_key: true|
|groups_id|integer|null: false,foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group

## group_users table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
