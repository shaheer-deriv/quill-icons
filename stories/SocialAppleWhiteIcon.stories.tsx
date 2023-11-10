import type { Meta, StoryObj } from '@storybook/react';

import { SocialAppleWhiteIcon } from '../src/react/Social';

const meta = {
  title: 'social/SocialAppleWhiteIcon',
  component: SocialAppleWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SocialAppleWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SocialAppleWhiteIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
