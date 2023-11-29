import type { Meta, StoryObj } from '@storybook/react';

import { DarkSafeAndSecureIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/DarkSafeAndSecureIcon',
  component: DarkSafeAndSecureIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DarkSafeAndSecureIcon>;

export default meta;

type Story = StoryObj<typeof DarkSafeAndSecureIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
