import type { Meta, StoryObj } from '@storybook/react';

import { LightSafeAndSecureIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightSafeAndSecureIcon',
  component: LightSafeAndSecureIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightSafeAndSecureIcon>;

export default meta;

type Story = StoryObj<typeof LightSafeAndSecureIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
