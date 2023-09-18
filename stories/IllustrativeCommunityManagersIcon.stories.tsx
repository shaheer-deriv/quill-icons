import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeCommunityManagersIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeCommunityManagersIcon',
  component: IllustrativeCommunityManagersIcon,
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
} satisfies Meta<typeof IllustrativeCommunityManagersIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeCommunityManagersIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
