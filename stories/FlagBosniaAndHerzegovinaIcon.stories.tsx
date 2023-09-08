import type { Meta, StoryObj } from '@storybook/react';

import { FlagBosniaAndHerzegovinaIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagBosniaAndHerzegovinaIcon',
  component: FlagBosniaAndHerzegovinaIcon,
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
} satisfies Meta<typeof FlagBosniaAndHerzegovinaIcon>;

export default meta;

type Story = StoryObj<typeof FlagBosniaAndHerzegovinaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
